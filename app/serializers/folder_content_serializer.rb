class FolderContentSerializer < ActiveModel::Serializer
  attributes :id, :type, :name, :emoji
  attribute :url, if: :resource?
  attribute :has_contents, unless: :resource?


  def resource?
    true if object.contentsable_type == "Resource"
  end

  def has_contents
    object.contentsable.has_contents
  end
  
  def type
    object.contentsable_type
  end

  def name
    object.contentsable.name
  end

  def url
    object.contentsable.url
  end

  def emoji
    object.contentsable.emoji
  end

  def id
    object.contentsable.id

  end

end
