class Note < ApplicationRecord
    belongs_to :belongsable, polymorphic: true

end
