class FolderSerializer < ActiveModel::Serializer
  attributes :id, :name, :emoji, :is_public
  has_one :user
end
