import React from 'react'

import Layout from "../components/layout"
import Head from '../components/head'
import Balance from '../components/balance';
import IncomeExpenses from '../components/income-expenses';
import TransactionList from '../components/transaction-list';
import AddTransaction from '../components/add-transaction';

const AboutPage = () => {
    return (
        <Layout>
            <Head title="Expense-Tracker-App"/>
            <>
                <section className="section expense-tracker">
                    <div className="container">
                    <Balance />
                    <IncomeExpenses />
                    <TransactionList />
                    <AddTransaction />
                    </div>
                </section>
                <section className="section"></section>
            </>
        </Layout>
    )
}

export default AboutPage