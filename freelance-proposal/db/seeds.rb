10.times do |proposal|
  Proposal.create!(
    customer: "Customer #{proposal + 1}",
    portfolio_url: "http://ryanstapleton.com/portfolios",
    tools: "Ruby on Rails, Angular 4, and Postgres",
    estimated_hours: (80 + proposal),
    hourly_rate: 120,
    weeks_to_complete: 12,
    client_email: "ryanstapleton.dev@gmail.com"
  )
end