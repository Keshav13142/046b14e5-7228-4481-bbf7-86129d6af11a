package com.examly.springapp.Models;

import java.util.Date;
import javax.persistence.*;

@Entity
@Table(name = "Expense")
public class ExpenseModel {

    @Id
    private String expenseId;
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int billNumber;
    @Lob
    private byte[] billImage;
    private int billCost;
    private Date datedOn;
    private int empId;
    private String remark;
    private String status = "pending";
    @OneToOne
    @JoinColumn(name = "id")
    private UserModel claimedBy;

    public ExpenseModel() {
    }

    public ExpenseModel(String expenseId, int billNumber, byte[] billImage, int billCost, Date datedOn, int empId,
            String remark, String status, UserModel claimedBy) {
        this.expenseId = expenseId;
        this.billNumber = billNumber;
        this.billImage = billImage;
        this.billCost = billCost;
        this.datedOn = datedOn;
        this.empId = empId;
        this.remark = remark;
        this.status = status;
        this.claimedBy = claimedBy;
    }

    public String getExpenseId() {
        return expenseId;
    }

    public void setExpenseId(String expenseId) {
        this.expenseId = expenseId;
    }

    public int getBillNumber() {
        return billNumber;
    }

    public void setBillNumber(int billNumber) {
        this.billNumber = billNumber;
    }

    public byte[] getBillImage() {
        return billImage;
    }

    public void setBillImage(byte[] billImage) {
        this.billImage = billImage;
    }

    public int getBillCost() {
        return billCost;
    }

    public void setBillCost(int billCost) {
        this.billCost = billCost;
    }

    public Date getDatedOn() {
        return datedOn;
    }

    public void setDatedOn(Date datedOn) {
        this.datedOn = datedOn;
    }

    public int getEmpId() {
        return empId;
    }

    public void setEmpId(int empId) {
        this.empId = empId;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public UserModel getClaimedBy() {
        return claimedBy;
    }

    public void setClaimedBy(UserModel claimedBy) {
        this.claimedBy = claimedBy;
    }

}
