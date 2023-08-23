package com.bank.springbackend.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "transaction")
public class Transaction {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long transactionId;

	// @JsonFormat(pattern="dd-mm-yyyy")
	private Date transactionDate;

	private String transactionType;

	private String transactionDesc;

	private Double transactionAmount;

	private String toAccount;

	private String fromAccount;

}
