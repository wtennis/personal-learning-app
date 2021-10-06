class User < ApplicationRecord
    has_secure_password
    has_many :folders

    validates :username, presence: true, uniqueness: true

    def resources
        Resource.all.filter do |r| 
            r.owned_by === self
        end
    end
    
end

