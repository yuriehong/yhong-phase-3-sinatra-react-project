class CreateAnimes < ActiveRecord::Migration[6.1]
  def change
    create_table :animes do |t|
      t.string :title
      t.string :img
      t.integer :year
      t.string :genre
      t.integer :episodes
      t.string :summary
      t.timestamps
    end
  end
end
