class Resource < ApplicationRecord
    has_many :folder_contents, as: :contentsable

    validates :url, presence: true

    def parent_folder_id
        fc = FolderContent.find_by(contentsable_id: self.id)
        fc&.folder_id
    end

end
