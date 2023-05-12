package com.petcare.rest.webservices.restful.comment;

public class Comment {
    private Integer commentId;
    private Integer userId;
    private Integer orderedProductId;
    private Integer commentDescription;

    protected Comment () {}

    public Comment(Integer commentId, Integer userId, Integer orderedProductId, Integer commentDescription) {
        this.commentId = commentId;
        this.userId = userId;
        this.orderedProductId = orderedProductId;
        this.commentDescription = commentDescription;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "commentId=" + commentId +
                ", userId=" + userId +
                ", orderedProductId=" + orderedProductId +
                ", commentDescription=" + commentDescription +
                '}';
    }

    public Integer getCommentId() {
        return commentId;
    }

    public void setCommentId(Integer commentId) {
        this.commentId = commentId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getOrderedProductId() {
        return orderedProductId;
    }

    public void setOrderedProductId(Integer orderedProductId) {
        this.orderedProductId = orderedProductId;
    }

    public Integer getCommentDescription() {
        return commentDescription;
    }

    public void setCommentDescription(Integer commentDescription) {
        this.commentDescription = commentDescription;
    }
}
