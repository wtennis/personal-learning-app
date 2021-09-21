class Folder < ApplicationRecord
  has_many :folder_contents, as: :contentsable, dependent: :destroy
  has_many :notes, as: :belongsable, dependent: :destroy

  belongs_to :user

end
