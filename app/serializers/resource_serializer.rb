class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :emoji
end
