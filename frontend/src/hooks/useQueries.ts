import { useMutation } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitDemoRequest() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (params: {
      name: string;
      company: string;
      teamSize: string;
      preferredTime: string;
      email: string;
    }) => {
      if (!actor) throw new Error('Backend not available');
      return actor.submitDemoRequest(
        params.name,
        params.company,
        params.teamSize,
        params.preferredTime,
        params.email,
      );
    },
  });
}

export function useCaptureEmail() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (email: string) => {
      if (!actor) throw new Error('Backend not available');
      // Store email as a demo request with minimal placeholder fields
      return actor.submitDemoRequest(
        'Early Access Signup',
        'Unknown',
        'unknown',
        'flexible',
        email,
      );
    },
  });
}
