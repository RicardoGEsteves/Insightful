# Insightful: A Data-Driven Finance Dashboard

**Insightful** is a sophisticated finance dashboard designed to offer a comprehensive overview of an organization's financial performance and health. This application incorporates cutting-edge technologies, including real AI and machine learning, to provide accurate predictions and insights into key performance indicators (KPIs) such as revenue, expenses, cash flow, and profitability. It is meticulously crafted to cater to specific financial needs such as budgeting, forecasting, and decision-making.

## Features

- **Real AI and Machine Learning:** Utilize regression analysis and machine learning to predict and display revenue information based on historical data. The best fit line is employed to offer insightful predictions.

- **Real-time Financial Insights:** Monitor financial data in real-time to identify trends and patterns that drive business growth or potential risks.

- **Comprehensive KPI Dashboard:** Gain a clear overview of key financial metrics, including revenue, expenses, cash flow, and profitability, with interactive charts and visualizations.

- **Predictive Analytics:** Leverage machine learning algorithms to predict future revenue trends using regression lines, providing valuable guidance for budgeting and forecasting.

- **Data-Driven Decision Making:** Make informed business decisions based on actionable insights derived from financial data analysis.

- **Data Visualization:** Leverage Recharts to create interactive and visually appealing charts, allowing users to intuitively understand financial data trends.

- **Efficient Data Management:** The combination of TanStack Table, Redux Toolkit, and Redux Toolkit Query ensures efficient data management and state handling. This stack is chosen to provide a seamless experience in handling complex financial data.

## Tech Stack

### Frontend

- **TypeScript:** Enhances code readability and maintainability.
- **React:** A declarative, efficient, and flexible JavaScript library for building user interfaces.
- **Next.js 14:** A React framework providing server-side rendering and other advanced features.
- **TanStack Table:** A powerful and customizable table library for React.
- **Redux Toolkit:** Simplifies state management in React applications.
- **Redux Toolkit Query:** A set of utility functions for managing queries in a Redux application.
- **React Router:** Enables navigation and routing in a React application.
- **Recharts:** A composable charting library for React, facilitating data visualization.

### Backend

- **Node.js:** A JavaScript runtime for server-side development.
- **Hono:** Implement Hono for secure and reliable messaging between the backend and React application.
- **PostgreSQL:** A powerful, open-source relational database system.
- **Prisma:** A modern database toolkit that simplifies database access in Node.js.

### Machine Learning

- **Regression-js:** A library for implementing regression analysis, crucial for accurate revenue prediction.

### Styling

- **Tailwindcss:** A utility-first CSS framework for rapidly building custom designs.
- **Shadcn-ui:** Custom UI components for enhancing the application's visual appeal.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a .env file in the root directory and add the following:

   ```bash
   DATABASE_URL=""
   ```

4. Database and Prisma setup

   ```bash
   npx prisma init
   npx prisma generate
   npx prisma db push
   ```

5. Start the application:

   ```bash
   npm run dev
   ```

   The application will be accessible at http://localhost:3000.

## Usage

1. Navigate to the provided local development URL.
2. Explore the finance dashboard to gain insights into your organization's financial performance.
3. Customize the dashboard based on your specific needs for budgeting, forecasting, and decision-making.
4. Leverage the machine learning features for revenue prediction using the regression line.

## Contributing

If you would like to contribute to Insightful Finance Dashboard, you're welcome.

## License

Insightful Finance Dashboard is open-source software licensed under the [MIT License](LICENSE).
