class RemoveColumns < ActiveRecord::Migration[7.0]
  def change
    remove_column :events, :image
    remove_column :users, :image
  end
end
