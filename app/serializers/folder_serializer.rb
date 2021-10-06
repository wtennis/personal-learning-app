class FolderSerializer < ActiveModel::Serializer
  attributes :id, :parent_folder_id, :name, :emoji, :has_contents, :note
end
