Feature: Search functionality

  Scenario: User searches for a product
    Given I am on the homepage
    When I need to login by username "standard_user" and password "secret_sauce"
    Then I should able to login
