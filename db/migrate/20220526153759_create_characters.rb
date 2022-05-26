class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.text :bio
      t.string :role
      t.string :origin
      t.string :main_image
      t.string :slide_image_1
      t.string :slide_image_2
      t.string :slide_image_3
      t.timestamps
    end
  end
end
