Feature: Search in Amazon

   Scenario: Color Search in Amazon
      Given I navigate to amazon home page
      When I search for Green
      Then I get relevant information
