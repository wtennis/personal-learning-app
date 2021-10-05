class FolderSerializer < ActiveModel::Serializer
  attributes :id, :parent_folder_id, :name, :emoji, :is_public, :has_contents, :notes
  has_one :user
end
