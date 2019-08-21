/**
 * This file is part of the @egodigital/types distribution.
 * Copyright (c) e.GO Digital GmbH, Aachen, Germany (https://www.e-go-digital.com/)
 *
 * @egodigital/types is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation, version 3.
 *
 * @egodigital/types is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Describes a 'package.json'.
 */
export interface IPackageJSON {
    /**
     * The author of the package.
     */
    author?: string;
    /**
     * Required dependencies.
     */
    dependencies?: {
        /**
         * Module name: version
         */
        [name: string]: string;
    },
    /**
     * A description.
     */
    description?: string;
    /**
     * Dependencies for development.
     */
    devDependencies?: {
        /**
         * Module name: version
         */
        [name: string]: string;
    },
    /**
     * One or more (search) keywords.
     */
    keywords?: string[];
    /**
     * The main script / application.
     */
    main?: string;
    /**
     * The (internal) name of the package.
     */
    name: string;
    /**
     * Indicates if package is provate or not.
     */
    'private'?: boolean;
    /**
     * A list of one or more scripts.
     */
    scripts?: {
        /**
         * Build script.
         */
        build?: string;
        /**
         * Run in development mode.
         */
        dev?: string;
        /**
         * Run in production mode.
         */
        prod?: string;
        /**
         * Start script.
         */
        start?: string;
        /**
         * Test script.
         */
        test?: string;
        /**
         * Other scripts.
         */
        [name: string]: string;
    };
    /**
     * The version.
     */
    version: string;
}
