class Resource < ApplicationRecord
    has_many :folder_contents, as: :contentsable
    has_many :notes, as: :belongsable, dependent: :destroy

    validates :url, presence: true

    def parent_folder_id
      FolderContent.find_by(contentsable_id: self.id).folder_id
    end

end
