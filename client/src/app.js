const Shares = require ('./models/shares.js');
const Users = require ('./models/users_profile.js');
const Companies = require ('./models/companies.js');
const UsersPortfolio = require ('./models/users_portfolio.js');

const CurrentPortfolioView = require ('./views/current_portfolio_view.js');
const SelectMarketView = require ('./views/select_market_view.js');
const SelectProfileView = require ('./views/select_profile_views.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JS Loaded');

  const shares = new Shares()
  shares.getShareData();
  shares.bindEvents();

  const companies = new Companies()
  companies.getCompNameData();
  companies.bindEvents();

  const users = new Users()
  users.getUserData();

  const usersPortfolio = new UsersPortfolio()
  usersPortfolio.getUserPortData()

  const selectMarketView = new SelectMarketView()
  selectMarketView.bindEvents();

  const currentPortfolioView = new CurrentPortfolioView()
  currentPortfolioView.bindEvents();

  const selectProfileView = new SelectProfileView()
  selectProfileView.bindEvents();



});
