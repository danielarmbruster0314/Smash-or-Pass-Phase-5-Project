# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_05_26_155308) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.text "bio"
    t.string "role"
    t.string "origin"
    t.string "main_image"
    t.string "slide_image_1"
    t.string "slide_image_2"
    t.string "slide_image_3"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "comments", force: :cascade do |t|
    t.text "content"
    t.bigint "thought_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["thought_id"], name: "index_comments_on_thought_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "ratings", force: :cascade do |t|
    t.boolean "found_attractive"
    t.bigint "character_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_ratings_on_character_id"
    t.index ["user_id"], name: "index_ratings_on_user_id"
  end

  create_table "thought_reactions", force: :cascade do |t|
    t.boolean "is_valid"
    t.bigint "thought_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["thought_id"], name: "index_thought_reactions_on_thought_id"
    t.index ["user_id"], name: "index_thought_reactions_on_user_id"
  end

  create_table "thoughts", force: :cascade do |t|
    t.text "content"
    t.bigint "user_id", null: false
    t.bigint "character_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_thoughts_on_character_id"
    t.index ["user_id"], name: "index_thoughts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email", default: "", null: false
    t.string "image", default: "", null: false
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "comments", "thoughts"
  add_foreign_key "comments", "users"
  add_foreign_key "ratings", "characters"
  add_foreign_key "ratings", "users"
  add_foreign_key "thought_reactions", "thoughts"
  add_foreign_key "thought_reactions", "users"
  add_foreign_key "thoughts", "characters"
  add_foreign_key "thoughts", "users"
end
