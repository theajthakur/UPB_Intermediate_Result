# 📄 UP Board Intermediate Result Fetcher

This is a **Node.js backend API** that scrapes UP Board Intermediate results and returns them as structured JSON data. It's built using Express and Cheerio for fast, server-side HTML parsing. A React-based frontend is planned soon!

---

## 🚀 Features

- Fetches and parses Intermediate (Class 12) results from the official UP Board website.
- Returns result details as a clean JSON response.
- Built with **Express.js** for routing and **Cheerio** for HTML parsing.

---

## 📦 Tech Stack

- Node.js
- Express
- Cheerio
- Nodemon (for development)

---

## 📁 Project Structure

├── index.js  
├── package.json  
└── README.md

---

## 📥 Installation

```bash
git clone https://github.com/yourusername/up-board-result-fetcher.git
cd up-board-result-fetcher
npm install
```

## 📤 Sample Response (JSON)

```bash
{
  name: "Satyam Singh",
  mother: "Anjali Singh",
  father: "Mohan Singh",
  stream: "SCIENCE",
  marks: [
    {
      subject: "GENERAL HINDI",
      obtained_theory: "075",
      obtained_total: "075D",
      practical: 0,
    },
    {
      subject: "ENGLISH",
      obtained_theory: "075",
      obtained_total: "075D",
      practical: 0,
    },
    {
      subject: "PHYSICS",
      obtained_theory: "048",
      obtained_total: "078D",
      practical: 30,
    },
    {
      subject: "CHEMISTRY",
      obtained_theory: "033",
      obtained_total: "063",
      practical: 30,
    },
    {
      subject: "BIOLOGY",
      obtained_theory: "052",
      obtained_total: "082D",
      practical: 30,
    },
  ],
}
```
