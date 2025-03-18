export async function loadAllConfigs() {
    const configModules = import.meta.glob("../config/*.json", { eager: true });
    const configs: Record<string, any> = {};

    for (const path in configModules) {
        // Extract version number from filename (e.g., "v108" -> "108")
        const version = path.match(/v(\d+)\.json$/)?.[1];
        if (version) {
            configs[version] = (configModules[path] as any).default;
        }
    }

    return configs;
}
