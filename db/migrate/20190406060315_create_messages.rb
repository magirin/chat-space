class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|

      t.timestamps
      t.string :content
      t.string :image
      t.references :group, foreign_key: true
      t.references :user, foregin_key: true
    end
  end
end
