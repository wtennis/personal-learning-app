class FolderContent < ApplicationRecord
  belongs_to :contentsable, polymorphic: true
  belongs_to :folder
  
end
