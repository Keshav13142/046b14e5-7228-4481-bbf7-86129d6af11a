package com.examly.springapp.Repository;


import com.examly.springapp.Models.ExpenseModel;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<ExpenseModel,String> {

    ExpenseModel findExpenseByExpenseId(String id);
    
}