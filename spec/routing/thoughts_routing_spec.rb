require "rails_helper"

RSpec.describe ThoughtsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/thoughts").to route_to("thoughts#index")
    end

    it "routes to #show" do
      expect(get: "/thoughts/1").to route_to("thoughts#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/thoughts").to route_to("thoughts#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/thoughts/1").to route_to("thoughts#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/thoughts/1").to route_to("thoughts#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/thoughts/1").to route_to("thoughts#destroy", id: "1")
    end
  end
end
