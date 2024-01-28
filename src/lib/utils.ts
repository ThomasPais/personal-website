export function cn(...args: Array<string | null | undefined>): string {
	return args.filter(Boolean).join(' ');
}
