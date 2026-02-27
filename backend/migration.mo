import List "mo:core/List";
import Map "mo:core/Map";
import Nat "mo:core/Nat";

module {
  // Old actor type from previous version
  type OldActor = {
    emails : List.List<Text>;
  };

  // New DemoRequest type.
  type NewDemoRequest = {
    name : Text;
    company : Text;
    teamSize : Text;
    preferredTime : Text;
    email : Text;
    submittedAt : Int;
  };

  // New actor type.
  type NewActor = {
    demoRequests : Map.Map<Nat, NewDemoRequest>;
    emails : List.List<Text>;
    nextId : Nat;
  };

  // Migration function called by the main actor via the with-clause.
  public func run(old : OldActor) : NewActor {
    {
      demoRequests = Map.empty<Nat, NewDemoRequest>();
      emails = old.emails;
      nextId = 0;
    };
  };
};
