class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :emoji, :parent_folder_id, :note
end