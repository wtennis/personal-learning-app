class FolderContentSerializer < ActiveModel::Serializer
  attributes :id, :contentsable_id, :contentsable_type
  has_one :folder
end
