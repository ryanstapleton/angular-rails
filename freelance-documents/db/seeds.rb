
#   t.string "title"
#   t.string "description"
#   t.text "file_url"
#   t.text "image_url"
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false

10.times do |d|
  FreelanceDocument.create!(
    title: "Document #{d + 1}", 
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem   aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    file_url: "https://drive.google.com/open?id=1jVevRIKLoS2eXWthsd9mxVT9NFKYWXsfvS0vHFyHxRA",
    image_url: "https://membermouse.com/wp-content/uploads/2016/09/Freelancer-Liability-Featured.png"
  )
end