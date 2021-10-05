class ResourcesController < ApplicationController
    
    def index
        resources = Resource.all
        render json: resources
    end

    def destroy
        resource = Resource.find_by!(id: params[:id])
        if resource
            resource.folder_contents.destroy_all
            resource.destroy
            head :no_content
        end
    end

end
