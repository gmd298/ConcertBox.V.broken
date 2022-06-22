class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.integer :user_id
      t.integer :musician_id
      t.string :location
      t.string :venue
      t.date :date
      t.string :image

      t.timestamps
    end
  end
end
