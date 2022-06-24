class AddColumnsToMusicians < ActiveRecord::Migration[7.0]
  def change
    add_column :musicians, :name, :string
  end
end
