class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :emoji, :notes, :parent_folder_id
end