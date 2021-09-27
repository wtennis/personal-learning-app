class Resource < ApplicationRecord
    has_many :folder_contents, as: :contentsable
    has_many :notes, as: :belongsable, dependent: :destroy

end
