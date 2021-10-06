class ResourcesController < ApplicationController
    
 
    def create
        resource = Resource.create!(resource_params)
        nest = FolderContent.create(folder_id: params[:parent_id], contentsable_id: resource.id, contentsable_type: "Resource")
        render json: resource, status: :created
    end

    def update
        resource = Resource.find_by!(id: params[:id])
        resource.update!(update_params)
        render json: resource
      end
  

    def destroy
        resource = Resource.find_by!(id: params[:id])
        if resource
            resource.folder_contents.destroy_all
            resource.destroy
            head :no_content
        end
    end

    private

    def resource_params
        params.permit(:name, :emoji, :url)
    end
    
    def update_params
        params.permit(:name, :note)
    end
  
end
