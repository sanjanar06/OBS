package com.bank.springbackend.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
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
@Table(name = "transactions")
public class Transactions {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long transactionId;
	
	@Column(name = "transactionDate", nullable = true)
	private LocalDate transactionDate;

	@Column(name = "transactionType", nullable = true)
	private String transactionType;

    @Column(name = "transactionDesc", nullable = true)
	private String transactionDesc;

    @Column(name = "transactionAmount", nullable = true)
	private Double transactionAmount;

    // @OneToOne(mappedBy = "user")
	// private UserProfile userProfile;
	
}
