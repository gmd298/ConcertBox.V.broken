
ActiveRecord::Schema[7.0].define(version: 2022_06_24_095955) do
  create_table "events", force: :cascade do |t|
    t.integer "user_id"
    t.integer "musician_id"
    t.string "location"
    t.string "venue"
    t.date "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "musicians", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.string "password_digest"
  end

end
