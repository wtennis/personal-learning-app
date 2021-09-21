class NoteSerializer < ActiveModel::Serializer
  attributes :id, :text, :belongsable_id, :belongsable_type
end
