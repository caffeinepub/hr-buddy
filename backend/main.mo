import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import List "mo:core/List";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Migration "migration";

(with migration = Migration.run)
actor {
  type DemoRequest = {
    name : Text;
    company : Text;
    teamSize : Text;
    preferredTime : Text;
    email : Text;
    submittedAt : Int;
  };

  func validateEmail(email : Text) : () {
    let validEmail = email.contains(#text "@") and email.contains(#text ".");
    if (not validEmail) {
      Runtime.trap("Please provide a valid email address");
    };
  };

  type CustomId = Nat;

  let demoRequests = Map.empty<CustomId, DemoRequest>();
  let emails = List.empty<Text>();
  var nextId : CustomId = 0;

  public shared ({ caller }) func submitDemoRequest(
    name : Text,
    company : Text,
    teamSize : Text,
    preferredTime : Text,
    email : Text,
  ) : async CustomId {
    validateEmail(email);

    let request : DemoRequest = {
      name;
      company;
      teamSize;
      preferredTime;
      email;
      submittedAt = Time.now();
    };

    demoRequests.add(nextId, request);
    let idToReturn = nextId;
    nextId += 1;
    idToReturn;
  };

  public query ({ caller }) func getAllDemoRequests() : async [DemoRequest] {
    demoRequests.values().toArray();
  };

  public query ({ caller }) func getAllDemoRequestsByEmail(email : Text) : async [DemoRequest] {
    demoRequests.values().filter(
      func(request) { Text.equal(request.email, email) })
      .toArray();
  };
};
