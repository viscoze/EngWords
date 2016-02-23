class CreateWords < ActiveRecord::Migration
  def change
    create_table :words do |t|
      t.string :topic
      t.string :word
      t.string :translate
      t.text   :description

      t.timestamps null: false
    end
  end
end
