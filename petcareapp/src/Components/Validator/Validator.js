// Đối tượng Validator
export function Validator(options,setUsername,setPassword) {
    
	var selectorRules = {}; // Thực hiện việc tránh bị ghi đè nếu có 2 rules
	// Hàm thực hiện validate
	function validate(inputElement, rule) {
		var errorElement = inputElement.closest(options.formGroupSelector).querySelector(options.errorSelector);
		var errorMessage;

		var rules = selectorRules[rule.selector]; // Lấy ra key-value là selector blur vào
		// Lặp qua từng rule và kiểm tra
		// Nếu có lỗi thì dừng việc kiểm tra
		// forEach không break được
		for (var i = 0; i < rules.length; i++) {
			switch (inputElement.type) {
				case 'radio':
				case 'checkbox':
					errorMessage = rules[i](formElement.querySelector(rule.selector + ':checked'));
					break;
				default:
					errorMessage = rules[i](inputElement.value);
			}
			// Khi có lỗi (có giá trị -> true) thì break;
			if (errorMessage) break;
		}

		//undefine => không có gì trả về => false ngược lại sẽ trả về => true
		if (errorMessage) {
			errorElement.innerText = errorMessage;
			inputElement.closest(options.formGroupSelector).classList.add('invalid');
            console.log()
            inputElement.closest(options.formGroupSelector).querySelector('.form-control').classList.add('input-error');
		} else {
			errorElement.innerText = '';
            inputElement.closest(options.formGroupSelector).querySelector('.form-control').classList.remove('input-error');
			inputElement.closest(options.formGroupSelector).classList.remove('invalid');
		}
		return !!errorMessage; // Nếu có lỗi trả về true
	}

	// Lấy element của form cần validate
	var formElement = document.querySelector(options.form);
	if (formElement) {
		// Khi submit form
		formElement.onsubmit = function (e) {
			e.preventDefault();

			// Gửi hợp lệ ban đầu là true , nếu có lỗi -> false
			var isSubmitValid = true; // True => submit thành công
			// Lặp qua từng rule và validate
			options.rules.forEach(function (rule) {
				var inputElement = formElement.querySelector(rule.selector);
				var isValid = validate(inputElement, rule);
				if (isValid) isSubmitValid = false;
			});

			// Nếu form không có lỗi thì thực hiện
			if (isSubmitValid) {
				// Nếu có onSubmit là một function
				// Trường hợp submit với javascript
				if (typeof options.onSubmit === 'function') {
					// Lấy ra tất cả input có Atribute là name
					var enableInputs = formElement.querySelectorAll('[name]:not([name="confirmPassword"])');
                    
					// vÌ enableInputs là một NodeList mà NodeList lại không sử dụng được reduce
					// Chuyển nó thành Array để sử dụng được reduce
					var formValue = Array.from(enableInputs).reduce((values, input) => {
						// Reduce thành key:value vào object sau đó cuối cùng là return ra values là một object
						switch (input.type) {
							case 'radio':
								if (input.matches(':checked')) {
									values[input.name] = input.value;
								}
								break;
							case 'checkbox':
								// Không checked thì cho value là một mảng
								if (!values[input.name]) values[input.name] = [];
								// Nếu checked thì push vào mảng
								if (input.checked) values[input.name].push(input.value);
								// Kiểm tra nếu là mảng rỗng thì gán là chuỗi ''
								if (values[input.name].length === 0) values[input.name] = '';
								break;
							case 'file':
								values[input.name] = input.files;
								break;
							default:
								values[input.name] = input.value;
						}
						return values;
					}, {});

					// Callback lại và truyền vào dữ liệu
					options.onSubmit(formValue);
				} else {
					// Trường hợp submit với hành vi mặc định
					formElement.submit();
				}
			}
		};

		// Lặp qua mỗi rule và xử lý ( lắng nghe sự kiện blur, input, ... )
		options.rules.forEach(function (rule) {
			// Lưu lại các rules cho mỗi input

			if (Array.isArray(selectorRules[rule.selector])) {
				selectorRules[rule.selector].push(rule.test);
			} else {
				selectorRules[rule.selector] = [rule.test];
			}
			var inputElements = formElement.querySelectorAll(rule.selector);

			Array.from(inputElements).forEach((inputElement) => {
				// Xử lý trường hợp khi blur khỏi input
				inputElement.onblur = function () {
					validate(inputElement, rule);
				};

				// Xử lý mỗi khi người dùng nhập vào input
				// inputElement.oninput = function () {
				// 	var errorElement = inputElement.closest(options.formGroupSelector).querySelector(options.errorSelector);
				// 	errorElement.innerText = '';
				// 	inputElement.closest(options.formGroupSelector).classList.remove('invalid');
				// };

			});
		});
	}
}

// Định nghĩa các rules
// Nguyên tắc của rules:
// 1. khi có lỗi => trả ra message lỗi
// 2. Khong không có lỗi => không trả ra cái gì cả undefined
// trim() Loại bỏ khoảng cách 2 bên đầu chuỗi
Validator.isRequired = function (selector, message) {
	return {
		selector: selector,
		test: function (value) {
			var result;
			if (typeof value === 'string') result = value.trim() ? undefined : message || 'Vui lòng nhập trường này';
			else result = value ? undefined : message || 'Vui lòng nhập trường này';
			return result;
		},
	};
};
Validator.isEmail = function (selector, message) {
	return {
		selector: selector,
		test: function (value) {
			var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			return regex.test(value) ? undefined : message || 'Trường này phải là email';
		},
	};
};

Validator.minLength = function (selector, min, message) {
	return {
		selector: selector,
		test: function (value) {
			var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
			if (value.length >= min) {
				return regex.test(value) ? undefined : message || `
                It should be included
                 1 Uppercase Character 
                 1 LowerCase Character  
                 1 number `;
			} else return `It must be greater than ${min} character`;
		},
	};
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
	return {
		selector: selector,
		test: function (value) {
			return value === getConfirmValue() ? undefined : message || 'Trường nhập vào không hợp lệ';
		},
	};
};