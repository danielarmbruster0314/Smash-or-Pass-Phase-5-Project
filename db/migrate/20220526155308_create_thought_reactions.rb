class CreateThoughtReactions < ActiveRecord::Migration[6.1]
  def change
    create_table :thought_reactions do |t|
      t.boolean :is_valid
      t.belongs_to :thought, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
