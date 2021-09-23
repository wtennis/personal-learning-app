class Folder < ApplicationRecord
  has_many :folder_contents, as: :contentsable, dependent: :destroy
  has_many :notes, as: :belongsable, dependent: :destroy

  belongs_to :user

  def nested_contents
    arr = FolderContent.where(folder_id: self.id)
    arr.map { |c| c.contentsable}
  end

  def self.top_levels
    Folder.where("NOT EXISTS(SELECT 1 from folder_contents where folders.id = folder_contents.contentsable_id)")
  end

  def has_contents
    self.nested_contents.length > 0
    # is this best practice? ^^^ expensive query? 
  end


end
