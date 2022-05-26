require "rails_helper"

RSpec.describe ThoughtReactionsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/thought_reactions").to route_to("thought_reactions#index")
    end

    it "routes to #show" do
      expect(get: "/thought_reactions/1").to route_to("thought_reactions#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/thought_reactions").to route_to("thought_reactions#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/thought_reactions/1").to route_to("thought_reactions#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/thought_reactions/1").to route_to("thought_reactions#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/thought_reactions/1").to route_to("thought_reactions#destroy", id: "1")
    end
  end
end
