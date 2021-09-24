class Folder < ApplicationRecord
  has_many :folder_contents, as: :contentsable
  has_many :notes, as: :belongsable

  belongs_to :user


  def nested_fc_instances
    FolderContent.where(folder_id: self.id)
  end

  def nested_contents
    arr = self.nested_fc_instances
    arr.map { |c| c.contentsable}
  end

  def destroy_nested
    nested = self.nested_contents
    nested.each do |n|
      if n.class != Resource && n.has_contents
        n.destroy_nested
      end
      n.folder_contents.destroy_all
      n.destroy
    end
  end

  def self.top_levels
    Folder.where("NOT EXISTS(SELECT 1 from folder_contents where folders.id = folder_contents.contentsable_id)")
  end

  def has_contents
    self.nested_contents.length > 0
    # is this best practice? ^^^ expensive query? 
  end


end
