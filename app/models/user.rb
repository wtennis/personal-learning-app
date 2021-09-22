class User < ApplicationRecord
    has_secure_password
    has_many :folders
    has_many :resources, through: :folder_contents

    validates :username, uniqueness: true
end
