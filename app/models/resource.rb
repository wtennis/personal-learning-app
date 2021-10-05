class Resource < ApplicationRecord
    has_many :folder_contents, as: :contentsable
    has_many :notes, as: :belongsable, dependent: :destroy

    validates :url, presence: true

    def parent_folder_id
        fc = FolderContent.find_by(contentsable_id: self.id)
        fc&.folder_id
    end

end
